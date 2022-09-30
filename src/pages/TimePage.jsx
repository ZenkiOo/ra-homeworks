import React, { useState } from 'react';

function DateTimePretty(Component) {
  return class extends React.Component {
    render() {
      const currentDate = new Date();
      const videoDate = new Date(this.props.date);
      const dateDiff = currentDate.getTime() - videoDate.getTime();
      let componentDate;

      if (dateDiff < 3600000) {
        componentDate = `${Math.ceil(dateDiff / (60 * 1000))} минут назад`;
      } else if (dateDiff < 86400000) {
        componentDate = `${Math.ceil(dateDiff / (60 * 60 * 1000))} часов назад`;
      } else {
        componentDate = `${Math.ceil(
          dateDiff / (24 * 60 * 60 * 1000)
        )} дней назад`;
      }

      return <Component date={componentDate} />;
    }
  };
}

const PrettyDateTime = DateTimePretty(DateTime);

function DateTime(props) {
  const dateStyle = {
    margin: '6px 0 0 0',
    textAlign: 'right',
    fontSize: '80%',
    color: '#cccccc',
  };
  return <p style={dateStyle}>{props.date}</p>;
}

function Video(props) {
  const videoStyle = {
    width: 486 + 'px',
    margin: 10 + 'px',
    padding: '10px 10px 1px',
    background: '#000000',
  };
  const iframeStyle = {
    display: 'block',
    margin: '0 auto',
    width: 460 + 'px',
    height: 240 + 'px',
    border: 'none',
  };
  return (
    <div style={videoStyle}>
      <iframe
        style={iframeStyle}
        src={props.url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <PrettyDateTime date={props.date} />
    </div>
  );
}

function VideoList(props) {
  return props.list.map((item) => <Video url={item.url} date={item.date} />);
}

const TimePage = () => {
  const rootStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 70 + 'px',
  };
  const [list, setList] = useState([
    {
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2017-07-31 13:24:00',
    },
    {
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-03-03 12:10:00',
    },
    {
      url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-02-03 23:16:00',
    },
    {
      url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-01-03 12:10:00',
    },
    {
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-01-01 16:17:00',
    },
    {
      url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2022-09-30 19:24:00',
    },
  ]);

  return (
    <div style={rootStyle}>
      <VideoList list={list} />
    </div>
  );
};
export { TimePage };
