import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'
import {updateSub} from '../actions'

const LoadSubreddit = ({dispatch}) => (
  <input type ='text' onChange = {(e) => dispatch(updateSub(e.target.value))} >
  <button onClick={() => dispatch(fetchPosts(this.props.subreddit))}>
    Fetch regqeccoc Posts
  </button>
)

export default connect()(LoadSubreddit)
