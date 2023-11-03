const Test = () => {
  let post = "어쩌구 저쩌구";

  return (
    <div className="App">
      <div className="gray-nav">
        <h4 id={post}>상단바예시</h4>
      </div>
      <div>
        <h2>메뉴</h2>
      </div>
      <h4>{post}</h4>
    </div>
  );
};

export default Test;

// gray-nav <- css 부분임
