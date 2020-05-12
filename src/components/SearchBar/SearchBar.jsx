// @ts-nocheck
import React, { Component } from 'react';


class SearchBar extends Component {

        constructor(){
            super()
            this.state={
                filter_name:"",
                toggle_search_bar: false  
        }
    }

    
        handleSearch = async (keyword) => {

            const {timeout} = this.state
            const {searchMovie ,getMoviesFirstTime , setSearchKeyword} = this.props
        
            setSearchKeyword(keyword)

            window.clearTimeout(this.state.timeout)
            if (!keyword) {

                getMoviesFirstTime()

            } else {
                const timeout = setTimeout(async () => {
                    searchMovie(keyword)
                }, 300);
                this.setState({
                    timeout
                })

            }
        }

        toggleSearch =()=>{
            const {toggle_search_bar} = this.state
            this.setState({
                toggle_search_bar: !toggle_search_bar
            })
        }
        
        render() {
            const {toggle_search_bar} = this.state
            return (
            <div className="searchbar__container">

                <div onClick={()=>this.toggleSearch()} className="search__icon">
                    <i className="fas fa-search"></i>
                </div>

                <input  
                    placeholder="Search By Name" 
                    className={toggle_search_bar ? "top__bar__input--active" : "top__bar__input--0ff" }
                    type="text" 
                    onChange={(e)=>this.handleSearch(e.target.value)}>
                </input>

            </div>
            );
    }
  }



export default SearchBar