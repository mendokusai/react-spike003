//tutorial 1
//tut 3 refactor
//tut9 add data
var CommentBox = React.createClass({
  render: function(){
    return (
      <div className="commentBox">
      <h1>Chomments</h1>
      <CommentList data={this.props.data} />
      <CommentForm />
      </div>
      );
  }
});
