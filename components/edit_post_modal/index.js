// Copyright (c) 2017 Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {addMessageIntoHistory} from 'mattermost-redux/actions/posts';
import {Preferences} from 'mattermost-redux/constants';
import {getBool} from 'mattermost-redux/selectors/entities/preferences';
import {getConfig} from 'mattermost-redux/selectors/entities/general';

import {setEditingPost} from 'actions/post_actions';
import {editPost} from 'actions/views/edit_post_modal';

import {getEditingPost} from 'selectors/posts';

import EditPostModal from './edit_post_modal.jsx';

function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        ctrlSend: getBool(state, Preferences.CATEGORY_ADVANCED_SETTINGS, 'send_on_ctrl_enter'),
        config: getConfig(state),
        editingPost: getEditingPost(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            editPost,
            setEditingPost,
            addMessageIntoHistory
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPostModal);
