import React, { useState } from 'react';
import style from '../css/highlight.module.css';

function New(props) {
  return (
    <div className={`${style['wrap-item']} ${style['wrap-item-new']}`}>
      <span className={style['label']}>New!</span>
      {props.children}
    </div>
  );
}

function Popular(props) {
  return (
    <div className={`${style['wrap-item']} ${style['wrap-item-popular']}`}>
      <span className={style['label']}>Popular!</span>
      {props.children}
    </div>
  );
}

function Article(props) {
  return (
    <div className={`${style['item']} ${style['item-article']}`}>
      <h3>
        <a href="#">{props.title}</a>
      </h3>
      <p className={style['views']}>Прочтений: {props.views}</p>
    </div>
  );
}

function Video(props) {
  return (
    <div className={`${style['item']} ${style['item-video']}`}>
      <iframe
        src={props.url}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
      <p className={style['views']}>Просмотров: {props.views}</p>
    </div>
  );
}

function highlight(Component) {
  return class extends React.Component {
    render() {
      if (this.props.views >= 1000) {
        return (
          <Popular>
            <Component {...this.props} />
          </Popular>
        );
      } else if (this.props.views < 100) {
        return (
          <New>
            <Component {...this.props} />
          </New>
        );
      }

      return <Component {...this.props} />;
    }
  };
}

const HighlightedVideo = highlight(Video);
const HighlightedArticle = highlight(Article);

function List(props) {
  return props.list.map((item) => {
    switch (item.type) {
      case 'video':
        return <HighlightedVideo {...item} />;

      case 'article':
        return <HighlightedArticle {...item} />;
    }
  });
}

const Highlight = () => {
  const [list, setList] = useState([
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      views: 50,
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      views: 12,
    },
    {
      type: 'article',
      title: 'Невероятные события в неизвестном поселке...',
      views: 175,
    },
    {
      type: 'article',
      title: 'Секретные данные были раскрыты!',
      views: 1532,
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      views: 4253,
    },
    {
      type: 'article',
      title: 'Кот Бегемот обладает невероятной...',
      views: 12,
    },
  ]);

  return (
    <div className={style.highlight_page}>
      <List list={list} />
    </div>
  );
};
export { Highlight };
