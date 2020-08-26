import React, { useEffect, useState } from "react";
import { Grid, Image } from "semantic-ui-react";
import { HeroHeader, PlaceholderHeader } from "../components/index";

import he from "he";
import "./News.module.css";

const News = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const createMarkup = (content) => {
    let data = he.decode(content);
    return { __html: data };
  };

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      const news = await fetch(`https://terralemon-dev.nl/json/news`);
      const data = await news.json();
      setIsLoading(false);
      setNews(data);
    };
    fetchNews();
  }, []);

  return (
    <Grid container centered>
      <Grid.Row style={style.row}>
        {news.map((item, i) => (
          <HeroHeader
          key={i}
          title={item.title}
          date={item.formated_entry_date}
          />
          ))}
        <Grid.Column width={16}>
        {isLoading ? <PlaceholderHeader />: null}
          {news.map((item, i) => (
            <>
            <Image as='a' href={`project/${item.project.url_title}`} key={i+10} src={item.project.image_project} fluid/>
            <div
              key={i}
              dangerouslySetInnerHTML={createMarkup(item.content_field)}
              style={{ margin: `2.5em 0` }}
              ></div>
            </>
          ))}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default News;

const style = {
  row: {
    marginTop: `2.5em`,
  },
  btn: {
    marginLeft: 0,
    position: `absolute`,
    left: 0,
  },
};
