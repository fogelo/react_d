import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className = 'header'>
        <img className = 'header-img'src ='https://www.lifepng.com/wp-content/uploads/2020/10/580b57fcd9996e24bc43c53e.png'></img>
      </header>
      <nav className = 'navbar'>
        <div><a>Profile</a></div>
        <div><a>Messages</a></div>
        <div><a>News</a></div>
        <div><a>Music</a></div>
        <div><a>Settings</a></div>
      </nav>

      <div className = 'main-content'>
        <div>ava+description</div>
        <div>
          My Posts
          <div>New post</div>
          <div>Post 1</div>
          <div>Post 2</div>
          <div>Post 3</div>
          <div>Post 4</div>
          <div>Post 5</div>
        </div>
      </div>
    </div>
  );
}

export default App;