const WelcomeCard = (props) => {
    
    const changeName = () => {
        props.setName('Gabriel');
    }

    return (
        <>
            <div>반갑습니다. {props.name} 님.</div>
            <button onClick={changeName}>이름 수정하기</button>
        </>
    )
}

export default WelcomeCard;