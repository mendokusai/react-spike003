var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
      <Comment author="Mike Shunt">This s a comment</Comment>
      <Comment author="Tom Jones">This s *another* comment</Comment>
      </div>
    );
  }
});
