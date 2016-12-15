import React, { PropTypes } from 'react';

import { Link } from 'react-router';
import Favorite from './../../containers/FavoriteContainer';
import { timeAgo } from 'utils';

class BoardRow extends React.Component {

	static propTypes = {
		id: React.PropTypes.number.isRequired
	};

	render() {
		// console.log('this.props : ', this.props);

		const favoriteConfig = {
			id: this.props.id,
			favorite: this.props.favorite
		};

		return (
			<tr>
				{
					(() => {
						if(Common.get('user').isManager) {
							return (
								<td className="check">
									<label className="xe-label">
										<input type="checkbox" />
										<span className="xe-input-helper"></span>
										<span className="xe-label-text xe-sr-only">선택</span>
									</label>
								</td>
							);
						}
					})()
				}
				<Favorite {...favoriteConfig} />
				{
					(() => {

					})
				}
				<td className="category xe-hidden-xs">Q&amp;A</td>
				<td className="title">
					<span className="xe-badge xe-primary-outline xe-visible-xs-inline-block">Q&amp;A</span>
					<span className="bd_ico_lock"><i className="xi-lock"></i><span className="xe-sr-only">secret</span></span>
					<Link to={`/detail/${this.props.id}`} className="title_text">{ this.props.title }</Link>
					<a href="#" className="reply_num xe-hidden-xs" title="Replies">{ this.props.commentCount > 0 ? this.props.commentCount : '' }</a>
					{
						(() => {
							if(this.props.fileCount > 0) {
								return (
									<span className="bd_ico_file"><i className="xi-clip"></i><span className="xe-sr-only">file</span></span>
								)
							}
						})
					}
					<span className="bd_ico_new"><i className="xi-new"></i><span className="xe-sr-only">new</span></span>
					<div className="more_info xe-visible-xs">
						<a href="" className="mb_autohr">XE</a>
						<span className="mb_time"><i className="xi-time"></i> { timeAgo(this.props.createdAt) }</span>
						<span className="mb_read_num"><i className="xi-eye"></i> { this.props.readCount }</span>
						<a href="#" className="mb_reply_num"><i className="xi-comment"></i> { this.props.commentCount > 0 ? this.props.commentCount : '' }</a>
					</div>
				</td>
				<td className="author xe-hidden-xs"><a href="#">{ this.props.user.displayName }</a></td>
				<td className="read_num xe-hidden-xs">{ this.props.readCount }</td>
				<td className="time xe-hidden-xs">{ timeAgo(this.props.createdAt) }</td>
			</tr>
		);
	}
};

export default BoardRow;
