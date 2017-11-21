import React from 'react';
import thumb_up from '../../assets/thumb_up.png';
import thumb_down from '../../assets/thumb_down.png';


export default class CreateCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            img : props.music.img,
            artist: props.music.artist,
            title: props.music.title,
            date: props.music.date,
            like: 0,
            dislike: 0
        }
    }

    update_like(){
       this.setState({ like : this.state.like +1 })
    };
    
    update_dislike(){
        this.setState({dislike : this.state.dislike +1 })
    };

    render(){
        return (
            <div className='music'>
                <div className='box-image'>
                    <img className='album-img' src={this.state.img} alt={this.state.artist + " " + this.state.title}/>
                </div>
                <div className='details'>
                    <p><strong>{this.state.artist}</strong></p>
                    <p className='title'>{this.state.title}, {this.state.date}</p>
                </div>
                <div className='counter'>
                    <div className='thumb-content'>
                        <img src={thumb_up} className='thumbs' onClick={this.update_like.bind(this)}/>
                        <span className='counter-value'> {this.state.like} </span>
                    </div>
                    <div className='thumb-content'>
                        <img src={thumb_down} className='thumbs' onClick={this.update_dislike.bind(this)}/>
                        <span className='counter-value'> {this.state.dislike} </span>
                    </div>
                </div>
            </div>
        )
    }
}

