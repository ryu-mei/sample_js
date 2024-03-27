const imageLists = [
    "./images/photo1.jpg",
    "./images/photo2.jpg",
    "./images/photo3.jpg",
    "./images/photo4.jpg"  
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