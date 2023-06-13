import Step from "@/components/Step";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {useRouter} from "next/router";
import {useSelector,useDispatch} from "react-redux";
import {updateStateData} from "@/store/stepData";


const Main = () => {

    const dispatch = useDispatch();
    const data = useSelector(state => state.stepData.data);


    const validationSchema = Yup.object({
        name: Yup.string().min(3, 'En az 3 karakter olmalıdır').max(300, 'En fazla 300 karakter olmalıdır').required('Bu alan zorunludur'),
    });
    const router = useRouter();
    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: {
            name: data.name,
            acceptanceCriteria: data.acceptanceCriteria,
        },
        validationSchema,
        onSubmit() {
            dispatch(updateStateData(values));
            router.push('/testFlow');
        }
    });




    const handleTag = (e) => {
        if (e.key === 'Enter') {
            if (data.tagList.length < 5) {
                if (e.target.value.length > 0) {
                    // add tag to array
                    dispatch(updateStateData(
                        {
                            tagList: [...data.tagList, {
                                id: data.tagList.length + 1,
                                name: e.target.value
                            }]
                        }
                    ));
                    e.target.value = '';
                }
            }
        }
    }


    return (
        <section id="centerContent">
            <div className="centerWrapper">
                <Step step={1}  />
                <div className="centerCard formV">
                    <div className="cardTitle"><span>1</span> Test bilgileri</div>
                    <div className="formBox">
                        <form>
                            <div className="formInput">
                                <label htmlFor="name">Test Adı *</label>
                                <input
                                    name="name"
                                    id="name"
                                    type="text"
                                    placeholder="Input"
                                    onChange={handleChange}
                                    value={values.name}
                                />
                                {
                                    // errors testName and touched testName
                                    errors.name && <span className="error">{errors.name}</span>
                                }
                            </div>
                            <div className="formInput">
                                <label htmlFor="criteria">Test kabul kriterleri (İsteğe bağlı)</label>
                                <textarea
                                    name="acceptanceCriteria"
                                    id="criteria"
                                    onChange={handleChange}
                                    value={values.acceptanceCriteria}
                                ></textarea>
                            </div>
                            <div className="formInput mb10">
                                <label htmlFor="tagList">Etiket (İsteğe bağlı)</label>
                                <input
                                    name="tagList"
                                    id="tagList"
                                    type="text"
                                    placeholder="Input"
                                    disabled={
                                        data.tagList?.length >= 5
                                    }
                                    // set test tag array when enter pressed
                                    onKeyDown={handleTag}
                                />
                                    <span>Etiketlerinizi yazdıktan sonra enter’a basın</span>
                            </div>
                            <div className="tagsArea">
                                {
                                    data.tagList?.map((tag, index) => (
                                        <a
                                            key={index}
                                            onClick={
                                                (e) => {
                                                    e.preventDefault();
                                                    // remove tag from array
                                                    dispatch(updateStateData(
                                                        {
                                                            tagList: data.tagList.filter((item) => item.name !== tag.name)
                                                        }
                                                    ));
                                                }
                                            }
                                        >
                                            <img src="/images/delete.svg" alt=""/>
                                            {tag.name}
                                        </a>
                                    ))
                                }
                            </div>
                            <div className="formButton w-110 mt-3">
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                ><img src="/images/right.svg" alt=""/> Test akışı oluştur</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Main;