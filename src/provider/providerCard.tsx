import React from 'react';
import { Provider } from '../redux/modules/provider/provider';
import {
    Accordion,
    Card,
    CardHeader,
    CardContent,
    Avatar,
    IconButton,
    AccordionSummary,
    AccordionDetails,
    Typography
} from '@material-ui/core';
import { MoreVert, ExpandMore } from '@material-ui/icons';
import { RootState } from '../redux';
import { getTasks } from '../redux/modules/task/taskSelectors';
import { connect } from 'react-redux';
import { TaskForProvider, Task } from '../redux/modules/task/task';

const comparePriorities = (task1: Task, task2: Task) => {
    if (task1.priority < task2.priority) {
        return -1;
    }
    if (task1.priority > task2.priority) {
        return 1;
    }
    return 0;
}

const ProviderCard = (props: Prop) => (
    <Card>
        <CardHeader
            avatar={
                <Avatar>
                    {props.provider.first_name[0]}
                </Avatar>
            }
            action={
                <IconButton aria-label="settings">
                    <MoreVert />
                </IconButton>
            }
            title={`${props.provider.first_name} ${props.provider.last_name}, ${props.provider.degree}`}
            subheader={props.provider.dob}
        />
        <CardContent>
            {
                props.tasks[props.provider.doctor_id].sort(comparePriorities).map(
                    task => (
                        <Accordion key={task.task_id}>
                            <AccordionSummary
                                id={task.task_id}
                                expandIcon={<ExpandMore />}
                            >
                                {task.task_id}
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    I am {task.task_id}!
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    )
                )
            }
        </CardContent>
    </Card>
);

type Prop = {
    provider: Provider,
    tasks: TaskForProvider,
}

ProviderCard.mapStateToProps = (state: RootState) => ({
    tasks: getTasks(state),
});

export const ProviderTaskInformation = connect(ProviderCard.mapStateToProps)(ProviderCard);