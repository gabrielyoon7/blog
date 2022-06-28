const WelcomeCard = (props) => {
    return (
        <>
            <div>반갑습니다. {props.name} 님.</div>
            <button>이름 수정하기</button>
        </>
    )
}

export default WelcomeCard;