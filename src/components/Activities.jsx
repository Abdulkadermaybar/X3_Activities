import PropTypes from 'prop-types';
import './Activities.css';

const Activities = ({ activities }) => {
    return (
        <div className="activities">
            <h2>Extracurricular Activities</h2>
            <p>At Little Learners Academy, we believe in nurturing well-rounded individuals. Our extracurricular activities offer a diverse range of experiences that complement our academic curriculum and encourage students to explore their interests and passions.</p>
            <div className="activity-cards">
                {activities.map((activity, index) => (
                    <div key={index} className="activity-card">
                        <div className="icon">{activity.icon}</div>
                        <h3>{activity.title}</h3>
                        <p>{activity.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

Activities.propTypes = {
    activities: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Activities;