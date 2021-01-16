import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';

class DishdetailComponent extends Component {

    hasDish(dish) {
        return dish != null ? true : false
    }

    hasComments(comments) {
        return comments != null ? true : false
    }

    renderDish(dish) {
        if (this.hasDish(dish)) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div >
            );
        } else {
            return <div></div>
        }
    }
    renderComments(comments) {
        if (this.hasComments(comments)) {
            return (
                <div className="col-12 col-md-5 md-1">
                    <h4>Comments</h4>
                    {comments.map((comment) => {
                        let date = new Date(comment.date);
                        return (
                            <ul key={comment.id} className="list-unstyled">
                                <li>{comment.comment}</li>
                                <li>-- {comment.author} , {date.toDateString()}</li>
                            </ul>)
                    }
                    )}
                </div>
            );
        } else {
            return <div></div>
        }
    }
    render() {
        let dish = this.renderDish(this.props.dish)
        let comments;
        if (this.hasDish(this.props.dish)) {
            comments = (this.renderComments(this.props.dish.comments));
        }
        return (
            <div className="row">
                {dish}
                {comments}
            </div>);
    }
}

export default DishdetailComponent;