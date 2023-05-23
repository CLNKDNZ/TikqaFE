import {useRouter} from "next/router";

const Button = ({ children, ...props }) => {
    const router = useRouter();

    const handleButtonClick = (e) => {
        e.preventDefault();
        router.push(props.url);
    }

    if (props.url) {
        props.onClick = handleButtonClick;
    }
    return (
        <button {...props}>
            {children}
        </button>
    );
};

export default Button;