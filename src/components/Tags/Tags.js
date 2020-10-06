import React from "react";
import { connect } from 'react-redux';
import { fetchTags } from '../../actions/Tags';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from "./TagsStyles.css";

class Tags extends React.Component {
  constructor(){
    super();
    this.state={
      items:{},
    };
  }
  componentDidMount() {
    this.props.fetchTags();
  }
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps",nextProps);
    const {items} = this.state;
    if(!items.stories){
      this.setState({
        items: nextProps.tags.items
      })
    }
  }
  fetchData(){
    const {items} = this.state;
    const limit=12,offset=items.stories?items.stories.length:0;
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    fetch(`${proxyurl}https://yourstory.com/api/v2/tag/stories?brand=yourstory&slug=fintech-startup&limit=${limit}&offset=${offset}`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log("fetchImages",result)
          items.stories = items.stories.concat(result.stories);
          this.setState({
            items
          })
        }
      )
  }
  render()
  {
    const {isLoaded} = this.state;
    const {items} = this.props.tags;
    console.log("Tags")
    if(!items){
      return(<div className='loader'><Loader type="Oval" color="#563d7c" height={80} width={80} /></div>)
    }
    return (
      <div>
        <h1 className="title">{items.tag?items.tag.name:"Tags"}</h1>
        <div className="cardCover">
          <InfiniteScroll
            className='infiniteScroll'
            dataLength={items.stories?items.stories.length:1}
            next={()=>{this.fetchData()}}
            hasMore={true}
            loader={<div className='loader'><Loader type="Oval" color="#563d7c" height={80} width={80} /></div>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {items.stories?items.stories.map(story=>
              <div className="card" key={story.id}>
                <div className="innerCard">
                  <img className="cardImage"src={story.metadata.media} alt="Logo" />
                  <div className="innerCardContainer">
                    <div className="cardTime">
                      {story.timeLapsed}
                    </div>
                    <div className="cardTitle">
                      {story.title}
                    </div>
                  </div>
                  <div className="cardFooter">
                    <div className="cardFooterText">
                      {story.metadata.category.name}
                    </div>
                  </div>
                </div>
              </div>
            ):"Loading..."}
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state =>({
  tags: state.tags
})
export default connect(mapStateToProps, {fetchTags})(Tags)
