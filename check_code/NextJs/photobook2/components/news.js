const lists = [{
    date: "2020.XX.XX",
    title: "デザイン雑誌「ＸＸＸＸＸＸ Vol.11』に掲載していただきました。"
},{
    date: "2020.XX.XX",
    title: "デザイン雑誌「ＸＸＸＸＸＸ Vol.11』に掲載していただきました。"
},{
    date: "2020.XX.XX",
    title: "デザイン雑誌「ＸＸＸＸＸＸ Vol.11』に掲載していただきました。"
},{
    date: "2020.XX.XX",
    title: "デザイン雑誌「ＸＸＸＸＸＸ Vol.11』に掲載していただきました。"
},{
    date: "2020.XX.XX",
    title: "デザイン雑誌「ＸＸＸＸＸＸ Vol.11』に掲載していただきました。"
}];
const News = () => {
    const news = lists.map(list => {
        return (
            <tr>
                <td>{list.date}</td>
                <td>{list.title}</td>
            </tr>
        );
    });
    
    return (
        <>
            <div className="titleNews">News</div>
            <div>
                <table>{news}</table>
            </div>
        </>
    )
}

export default News;