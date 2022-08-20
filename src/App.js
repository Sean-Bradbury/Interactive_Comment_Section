import './App.scss';
//Components
import CommentsArea from './components/comments/commentsArea/CommentsArea';
import AppState from './context/app/AppState';
import CommentState from './context/comment/CommentState';

function App() {
  return (
    <AppState>
      <CommentState>
        <div className="App">
          <CommentsArea />
        </div>
      </CommentState>
    </AppState>
  );
}

export default App;
