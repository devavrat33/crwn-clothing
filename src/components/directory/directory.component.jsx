import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections} from '../../redux/directory/directory.selectors';

import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

const Directory =({sections})=>(
            <div className = 'directory-menu'>
            {      
                sections.map(({ id, ...otherSectionProps}) => {
                    return  <MenuItem key={id} {...otherSectionProps}/>;
                    // return  <MenuItem key={id} title={title} imageUrl = {imageUrl} linkUrl={linkUrl}/>;
                    })
            }        
            </div>
    );

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
