import './App.scss';
//Components
import CommentsArea from './components/comments/commentsArea/CommentsArea';
import CommentState from './context/comment/CommentState';

function App() {
  return (
    <CommentState>
      <div className="App">
        <CommentsArea />
      </div>
    </CommentState>
  );
}

export default App;
