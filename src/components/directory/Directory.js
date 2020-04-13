import React from 'react';
import './Directory.scss';
import MenuItem from '../menuItem/MenuItem';


class Directory extends React.Component {

    constructor () {
        super();

        this.state = {
            sections : [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
        }
    }

    render () {
        return (
            <div className='directory-menu'>
                {
                    // this.state.sections.map( ({title, imageUrl, id, size, linkUrl}) =>(
                      this.state.sections.map( ({id, ...otherSectionProps}) =>(
                        <MenuItem key={id} {...otherSectionProps} />
                        // <MenuItem 
                        //     title= {title} // instead of writing sections.title and sections.id so on and so forth, this is destructured using {title, imageUrl, id, size} instead of (section). So now we dont have to write section.id or section.imageUrl so on and so forth. One does not have to repeat section all the time
                        //     key= {id}
                        //     imageUrl= {imageUrl}
                        //     size={size}
                        //     linkUrl={linkUrl}
                        // />
                    ))
                }
                
            </div>
        );
    }
}

export default Directory;