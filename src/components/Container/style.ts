import styled from 'styled-components';
import mq from '../../utils/mediaqueries';

const Container = styled.div`
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    padding: 0 25px;
    
    ${mq.lowerXs} {
        padding: 0 15px;
    }
`;

export default Container;
