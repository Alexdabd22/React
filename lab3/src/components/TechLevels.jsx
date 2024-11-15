import PropTypes from 'prop-types';

const TechLevels = ({ register }) => (
    <div className="form-group">
        <label>My current level on tech *</label>
        <table>
            <thead>
            <tr>
                <th></th>
                {['Not relevant', 'Trainee', 'Junior', 'Middle', 'Senior', 'Expert'].map((level) => (
                    <th key={level}>{level}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {['JS', 'TS', 'React', 'Vue', 'Angular', 'NodeJS', 'Python'].map((tech) => (
                <tr key={tech}>
                    <td>{tech}</td>
                    {['Not relevant', 'Trainee', 'Junior', 'Middle', 'Senior', 'Expert'].map((level) => (
                        <td key={`${tech}-${level}`}>
                            <input type="radio" {...register(`techLevels.${tech}`)} value={level} />
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    </div>
);

TechLevels.propTypes = {
    register: PropTypes.func.isRequired,
};

export default TechLevels;
