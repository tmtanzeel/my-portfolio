import React from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';
import './EducationTimeline.css';
import TimelineCard from '../TimelineCard/TimelineCard';

const VALUES = [
    '2008-06-01',
    '2010-06-01',
    '2013-06-01',
    '2015-03-01',
    '2019-01-01',
    '2019-06-17',
    '2019-08-01',
    '2021-09-05'
];

class EducationTimeline extends React.Component {
    state = {
        value: 0,
        previous: 0,
        educationHistory: [
            { institute: "St. Thomas School", attended: "2008", board: "Affliated to: I.C.S.E", location: "Pauri Garhwal, Uttarakhand" },
            { institute: "Y.M.C.A College Allahabad", attended: "2010", board: "Affliated to: C.B.S.E", location: "Allahabad, Uttar Pradesh" },
            { institute: "Punjab Technical University", attended: "BCA, 2010-2013", board: "PTU", location: "Jalandhar, Punjab" },
            { institute: "NIT Jamshedpur", attended: "MCA, 2014-2015", board: "Institue of National importance", location: "Jamshedpur, Jharkhand" },
            { institute: "Philips, SDE (Intern)", attended: "Joined for internship", board: "Philips Healthcare", location: "Philips Innovation Campus, Bangalore" },
            { institute: "Philips, SDE-I (converted FTE)", attended: "Joined as Full Time Employee", board: "Philips Healthcare", location: "Philips Innovation Campus, Bangalore" },
            { institute: "NIT Allahabad", attended: "MCA, 2016-2019", board: "Institue of National importance", location: "Allahabad, Uttar Pradesh" },
            { institute: "Philips, SDE-II", attended: "Promoted to SDE-II", board: "Philips Healthcare", location: "Philips Innovation Campus, Bangalore" }

        ]
    };


    render() {
        //myVariable = 1;

        return (
            <div className="timeline-wrapper">
                <h1>My career timeline</h1>
                {/* Bounding box for the Timeline */}
                <div className="timeline-box" style={{ width: '60%', height: '100px', margin: '0 auto' }}>
                    <HorizontalTimeline
                        className="timeline-view"
                        index={this.state.value}
                        indexClick={(index) => {
                            this.setState({ value: index, previous: this.state.value });
                        }}
                        values={VALUES} />
                </div>
                <div className='text-center'>
                    {/* any arbitrary component can go here */}
                    <TimelineCard content={this.state.educationHistory[this.state.value]}></TimelineCard>
                </div>
            </div>
        );
    }
}

export default EducationTimeline;