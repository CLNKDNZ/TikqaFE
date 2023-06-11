import React, {useEffect, useState} from "react";
import Link from "next/link";
import fromApi from "@/utils/fromApi";



function TestTable() {
    const [testList, setTestList] = useState([]);

    useEffect(() => {
        fromApi("GET", "test-case", null, (res) => {
            setTestList(res.data);
        });
    }, [])


    return (
        <section id="fluidContent">
            <div className="centerWrapper">
                <div className="centerCard fullWidth noBr noPad">
                    <div className="tableTop">
                        <div className="formInput modelSearch mb0">
                            <label className="pl52" htmlFor="action">
                                Testler
                            </label>
                            <input type="text" placeholder="Test ID, test adı ya da etiketinde ara" />
                        </div>
                        <div className="formButton">
                                <Link href="/testInformation/" className="buttonBlue">
                                        <img src="/images/add.svg" alt="" /> Yeni test oluştur
                                </Link>
                        </div>
                    </div>
                    <div className="tableWrapper">
                        <div id="example_wrapper" className="dataTables_wrapper no-footer">
                            <table id="example" className="display dataTable no-footer" >
                                <thead>
                                <tr>
                                    <th>Test ID</th>
                                    <th>Test Adı</th>
                                    <th>Statü</th>
                                    <th>Son Çalıştırma Tarihi</th>
                                    <th>Oluşturan</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                {testList.map((test, index) => (
                                    <tr key={index}>
                                        <td>{test.id}</td>
                                        <td>{test.name}</td>
                                        <td>
                                            <div className="toggleSwitch noMar">
                                                <input
                                                    type="checkbox"
                                                    id="table-id1"
                                                    checked={test.status ? true : false}
                                                />
                                                <label htmlFor="table-id1"></label>
                                            </div>
                                        </td>
                                        <td>22.10.2019</td>
                                        <td>
                                            <strong>Berkan</strong>
                                        </td>
                                        <td>
                                            <a href="">Rapor</a>
                                        </td>
                                        <td>
                                            <button className="buttonTransparent">
                                                <img src="/images/select.svg" alt="" />
                                            </button>
                                        </td>
                                    </tr>
                                    )
                                )
                                }

                                </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestTable;