const axios = require("axios");
const url = "http://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json";

axios
    .get(url)
    .then((result) =>
    {
        if (result.status != 200)
        {
            throw new Error("요청 실패!");
        }

        if(result.data)
        {
            return result.data;
        }
        
        throw new Error("데이터 없엉 ㅠㅠ");
    })
    .then((data) =>
    {
        if (!data.articleList || data.articleList.size == 0)
        {
            throw new Error("데이터 없엉 ㅠㅠ");
        }
        return data.articleList;
    })
    .then((articles) =>
    {
        return articles.map((article, idx) =>
        {
            return {title : article.title, rank:idx + 1}
        });
    })
    .then((results) =>
    {
        for(let movieInfo of results)
        {
            console.log(`[${movieInfo.rank}위] ${movieInfo.title}`);
        }
    })
    .catch((err) =>
    {
        console.log("<<에러 발생>>");
        console.error(err);
    });