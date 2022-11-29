import React, { FC } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, useTheme, Typography, Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

import { tokens } from 'theme';
import { IFaqData } from "model/app";
import useFetch from "hooks/useFetch";
import ApiService from "service/ApiService";

import Loader from "components/loader/Loader";
import DashboardHeader from "components/dashboard-header/DashboardHeader";

const FAQ: FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { data: faq, isLoading } = useFetch<IFaqData[]>(ApiService.getFaqData);

  if (isLoading) return <Loader />;

  return (
    <Box m="20px">
      <DashboardHeader title="FAQ" subtitle="Frequently Asked Questions Page" />

      {faq?.map(item => (
        <Accordion key={item.id} defaultExpanded sx={{ margin: "10px 0", backgroundColor: "#1F2A40", borderRadius: "5px" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {item.question}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;
