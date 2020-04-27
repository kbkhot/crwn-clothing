import React from 'react';
import {connect} from 'react-redux';

import './Directory.scss';
import MenuItem from '../menuItem/MenuItem';
import { selectDirectorySections} from '../../redux/directory/directorySelectors';
import { createStructuredSelector } from 'reselect';


const Directory = ({sections}) => {

        return (
            <div className='directory-menu'>
                {
                    // this.state.sections.map( ({title, imageUrl, id, size, linkUrl}) =>(
                      sections.map( ({id, ...otherSectionProps}) =>(
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
    

const mapStateToProps = createStructuredSelector ({
  sections: selectDirectorySections
})

// otehr option is to write the code like this without createStructuredSelector
// const mapStateToProps =(state)=> ({
//   sections:selectDirectorySections(state)
// })

export default connect(mapStateToProps) (Directory);