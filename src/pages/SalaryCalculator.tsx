import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { MonetaryInput } from "../components/MonetaryValue";
import { useMonetaryState } from "../hooks/";

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const buttonsStyle = {
  display: "flex",
  justifyContent: "space-between",
};

const calculatedBodyStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  alignItems: "center",
  marginTop: "1rem",
};

const SalaryCalculator = () => {
  const [salaryModalOpen, setSalaryModalOpen] = useState(true);
  const [displayCalculatedSalary, setDisplayCalculatedSalary] =
    useState<boolean>(false);
  const baseSalary = useMonetaryState();
  const bonus = useMonetaryState();
  const eps = baseSalary.value * 0.04;
  const pension = baseSalary.value * 0.04;
  const exencion = (baseSalary.value - eps - pension) * 0.25;
  const gravableBase = baseSalary.value - eps - pension - exencion;
  const gravableUVTValue = gravableBase / 42412;
  const retefuente = (gravableUVTValue - 95) * 0.19 * 42412;
  const finalSalary =
    baseSalary.value + bonus.value - retefuente - eps - pension;

  const handleClose = () => setSalaryModalOpen(false);

  const onCalculateClick = () => {
    setDisplayCalculatedSalary(true);
  };

  return (
    <div>
      <Modal
        open={salaryModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box sx={buttonsStyle}>
            <MonetaryInput
              label="Base"
              id="baseSalary"
              value={baseSalary.value}
              onChange={(ev) =>
                baseSalary.handleChange(ev, setDisplayCalculatedSalary)
              }
              error={baseSalary.error}
            />
            <MonetaryInput
              label="Bonus"
              id="bonus"
              value={bonus.value}
              onChange={(ev) =>
                bonus.handleChange(ev, setDisplayCalculatedSalary)
              }
              error={bonus.error}
            />
          </Box>

          {displayCalculatedSalary && (
            <Box sx={calculatedBodyStyle}>
              <Typography variant="body1">
                <b>EPS:</b> {eps}
              </Typography>
              <Typography variant="body1">
                <b>Pension:</b> {pension}
              </Typography>

              <Typography variant="body1">
                <b>Base Gravable:</b> {gravableBase}
              </Typography>
              <Typography variant="body1">
                <b>Base Gravable UVT:</b> {gravableUVTValue.toFixed(2)}
              </Typography>

              <Typography variant="body1">
                <b>Retefuente:</b> {Math.round(retefuente)}
              </Typography>

              <Typography variant="body1">
                <b>Salario Total:</b> {Math.round(finalSalary)}
              </Typography>
            </Box>
          )}
          <Box sx={buttonsStyle}>
            <Button onClick={onCalculateClick}>Calculate</Button>
            <Button>Save</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default SalaryCalculator;
