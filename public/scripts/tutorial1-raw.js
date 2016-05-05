var CommentBox = React.createClass({
  displayName: 'CommentBox',
  render: function() {
    return (
      React.createElement('div', {className: "commentBox"},
          "Hello, world! I am a CommentBox. Kill ALL Ninja!!!"
      )
    )
  }
});
ReactDOM.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);
