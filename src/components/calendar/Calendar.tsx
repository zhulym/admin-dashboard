/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useMemo, useState } from 'react';
import FullCalendar, { DateSelectArg, EventApi, formatDate } from '@fullcalendar/react';
import listPlugin from "@fullcalendar/list";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Box, List, ListItem, ListItemText, Typography, useTheme } from '@mui/material';

import { tokens } from 'theme';
import { createEventId, generateInitialEvents } from 'utils';

import DashboardHeader from 'components/dashboard-header/DashboardHeader';

const Calendar: FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);

  const onDateClick = (selected: DateSelectArg) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const onEventClick = (selected: any) => {
    if (window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`)) {
      selected.event.remove();
    }
  };

  const onSetCurrentEvent = (e: EventApi[]) => {
    setCurrentEvents(e);
  };

  const initialEvents = useMemo(() => {
    return generateInitialEvents();
  }, []);

  return (
    <Box m="20px">
      <DashboardHeader title="Calendar" subtitle="Full Calendar Interactive Page" />

      <Box display="flex" justifyContent="space-between">
        {renderSidebar()}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={onDateClick}
            events={initialEvents}
            eventClick={onEventClick}
            initialView="dayGridMonth"
            eventsSet={onSetCurrentEvent}
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
          />
        </Box>
      </Box>
    </Box>
  );

  function renderSidebar() {
    return (
      <Box
        p="15px"
        flex="1 1 20%"
        borderRadius="4px"
        sx={{ backgroundColor: `${colors.primary[400]}` }}
      >
        <Typography variant="h5">
          Events
        </Typography>
        <List>
          {currentEvents.map((e: any) => (
            <ListItem key={e.id} sx={{ backgroundColor: colors.greenAccent[500], margin: "10px 0", borderRadius: "2px" }}>
              <ListItemText primary={e.title} secondary={
                <Typography>
                  {formatDate(e.start, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </Typography>
              }
              />
            </ListItem>
          ))}
        </List>
      </Box>
    );
  }
};

export default Calendar;
