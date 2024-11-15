import useSurveyForm from './hooks/useSurveyForm';
import PersonalInfo from './components/PersonalInfo';
import FavoriteTech from './components/FavoriteTech';
import LearnTech from './components/LearnTech';
import TechLevels from './components/TechLevels';
import Interests from './components/Interests';
import Goals from './components/Goals';
import PreSales from './components/PreSales';
import FCCMeetup from './components/FCCMeetup';
import FCCTopics from './components/FCCTopics';
import ImprovementIdea from './components/ImprovementIdea';
import { useState } from 'react';
import './SurveyForm.css';

function SurveyForm() {
    const { register, handleSubmit, watch, errors, reset } = useSurveyForm();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const onSubmit = (data) => {
        console.log("Надіслано:", data);
        setIsSubmitted(true);
    };


    return (
        <div className="app-container">
            <form noValidate onSubmit={(e) => handleSubmit(onSubmit)(e)} className="survey-form">
                <h2>Tech skills / Activity</h2>
                <div className="section">
                    <PersonalInfo register={register} errors={errors}/>
                </div>
                <div className="section">
                    <FavoriteTech register={register} watch={watch} errors={errors}/>
                </div>
                <div className="section">
                    <LearnTech register={register} watch={watch} errors={errors}/>
                </div>
                <div className="section">
                    <TechLevels register={register}/>
                </div>
                <div className="section">
                    <Interests register={register} watch={watch} errors={errors}/>
                </div>
                <div className="section">
                    <Goals register={register}/>
                </div>
                <div className="section">
                    <PreSales register={register} errors={errors}/>
                </div>
                <div className="section">
                    <FCCMeetup register={register} errors={errors}/>
                </div>
                <div className="section">
                    <FCCTopics register={register} watch={watch} errors={errors}/>
                </div>
                <div className="section">
                    <ImprovementIdea register={register}/>
                </div>
                <button type="submit">Submit</button>
                <button type="button" className="clear-button" onClick={() => reset()}>
                    Reset
                </button>
                {isSubmitted && <p className="success-message">Вашу відповідь відправлено!</p>}
            </form>
        </div>
    );
}

export default SurveyForm;