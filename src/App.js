import './App.scss';
//Components
import CommentsArea from './components/comments/commentsArea/CommentsArea';
import CommentCard from './components/comments/commentCard/CommentCard';

function App() {
  return (
    <div className="App">
      <CommentsArea>
        <CommentCard data={{      "id": 1,
      "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      "createdAt": "1 month ago",
      "score": 12,
      "user": {
        "image": { 
          "png": "./images/avatars/image-amyrobson.png",
          "webp": "./images/avatars/image-amyrobson.webp"
        },
        "username": "amyrobson"
      },
      "replies": []}} />
      </CommentsArea>
    </div>
  );
}

export default App;
