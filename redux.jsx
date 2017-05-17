const mapStateToProps = (state) => {
  return {
    page: state.page,
    search: state.search,
    columns: state.columns
  }
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators(IndexActions, dispatch)
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Element)


// connect, connects
// 1. state object fields to props
// 2. Dispatch functions to props
