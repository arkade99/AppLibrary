export const Header = () => {
  return (
    <>
      <div style={{ padding: 20, marginBottom: 5, background: "#00ffcc" }}>
        <a style={{ paddingRight: 10 }} href="/todo">
          Todo App
        </a>
        <a style={{ paddingRight: 10 }} href="/form">
          Form App
        </a>
        <a style={{ paddingRight: 10 }} href="/formyup">
          Form App(yup)
        </a>
        <a style={{ paddingRight: 10 }} href="/reducerHookUseApp">
          ReducerHookUseApp
        </a>
        <a style={{ paddingRight: 10 }} href="/customHookUseAPP">
          CustomHookUseAPP
        </a>
        <a style={{ paddingRight: 10 }} href="/infiniteScroll">
          Infinite Scroll
        </a>
        <a style={{ paddingRight: 10 }} href="/url-app/add-url">
          Add-Url
        </a>
      </div>
      <div style={{ padding: 5, marginBottom: 30, background: "#00ffff" }}>
        <a href="/PracticeApp">Want To practice??</a>
      </div>
    </>
  );
};
