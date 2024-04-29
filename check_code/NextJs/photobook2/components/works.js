const imageLists = [
    "/",
    "/",
    "/",
    "/"  
]

const Works = () => {
    const lists = imageLists.map(list => {
        return (
            <li><img src={list} /></li>
        );
    })
    return (
        <>
            <div className="works">Works</div>
            <ul>{lists}</ul>
        </>
    )
}

export default Works;