import React, {Component} from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel'
import PostStatusFilter from '../post-status-filter/post-status-filter'
import PostList from '../post-list/post-list'
import PostAddForm from '../post-add-form/post-add-form'

import './css/app.css'

export default class App extends Component {
    constructor(props) {
        super (props);
        this.state = {
            data: [
                {label: 'Going to learn React', important: true, like: false, id: 1},
                {label: 'JSX is so good', important: false, like: false, id: 2},
                {label: 'Wanna have a break...', important: false, like: false, id: 3}
            ],
            term: '',
            filter: 'all'
        };


        this.togglePost = (id, item) => {
            this.setState(({data}) => {
                const index = data.findIndex(elem => elem.id === id);
                const newItem = {...data[index], [item]: !data[index][item]};

                const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
                return {
                    data: newArr
                }
            });
        };

        this.deleteItem = (id) => {
            this.setState(({data}) => {
                const index = data.findIndex(elem => elem.id === id)

                const newArr = [...data.slice(0, index), ...data.slice(index + 1)]

                return {
                    data: newArr
                }
            })
        };

        this.addItem = (body) => {
            const newItem = {
                label: body,
                important: false,
                id: Math.random()
            };
            this.setState(({data}) => {
                const newArr = [...data, newItem];
                return {
                    data: newArr
                };
            });
        };

        this.onToggleImportant = (id) => {
            this.togglePost(id, 'important');
        };

        this.onToggleLiked = (id) => {
            this.togglePost(id, 'like');
        };

        this.onUpdateSearch = term => {
            this.setState({term});
        }

        this.onFilterSelect = filter => {
            this.setState({filter});
        }
    }

    searchPost = (items, term) => {
        if (term.length === 0) {
            return items;
        } else {
            return items.filter(item => {
                return item.label.indexOf(term) > -1;
            })
        }
    }

    filterPost = (items, filter) => {
        if (filter === 'like') {
            return items.filter(item => item.like);
        } else {
            return items;
        }
    }

    render() {
        const {data, term, filter} = this.state;

        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <div className="app">
                <AppHeader
                liked={liked}
                allPosts={allPosts}/>
                <div className="search-panel d-flex">
                    <SearchPanel
                    onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter
                    filter={filter}
                    onFilterSelect={this.onFilterSelect}/>
                </div>
                <PostList 
                posts={visiblePosts}
                onDelete={this.deleteItem}
                onToggleLiked={this.onToggleLiked}
                onToggleImportant={this.onToggleImportant}
                togglePost={this.togglePost}/>
                <PostAddForm
                onAdd={this.addItem}/>
            </div>
        )
    }
}

