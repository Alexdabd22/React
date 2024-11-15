import PropTypes from 'prop-types';

const FavoriteTech = ({ register, watchValues, errors }) => {
    const selectedTech = watchValues?.favoriteTech || '';

    return (
        <div>
            <label>My favorite tech *</label>
            {['Vue', 'React', 'Angular', 'NodeJS', 'Other'].map((tech) => (
                <label key={tech}>
                    <input type="radio" value={tech} {...register('favoriteTech')} />
                    {tech}
                </label>
            ))}
            {selectedTech === 'Other' && (
                <input type="text" {...register('otherTech')} placeholder="Specify your tech" />
            )}
            {errors?.favoriteTech && <p>{errors.favoriteTech.message}</p>}
        </div>
    );
};

FavoriteTech.propTypes = {
    register: PropTypes.func.isRequired,
    watchValues: PropTypes.object,
    errors: PropTypes.object,
};

export default FavoriteTech;
