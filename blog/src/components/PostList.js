import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPostsAndUsers(); // calling action creater fetchPostsAndUsers
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId}/>
                    </div>
                </div>
            )
        })
    }

    render() {
        return <div className="ui relaxed divided list">{this.renderList()}</div>
    }
}

const mapStateToProps = (state) => { // state is our entire state
    return { posts: state.posts };
}

export default connect(
    mapStateToProps, 
    { fetchPostsAndUsers: fetchPostsAndUsers }
    )(PostList);