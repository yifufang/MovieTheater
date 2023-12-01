import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BModal({ theater_id }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [seat, setSeat] = React.useState(0);

  const HandleAddSeat = () => {
    fetch("http://localhost:5000/employee/addSeat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        theater_id: theater_id,
        number_of_seats: seat,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "success") {
          alert("Add seat successfully!");
        } else {
          alert("Add seat failed!");
        }
      })
      .catch((err) => console.log(err));
  };
  const HandleRemoveSeat = () => {
    fetch("http://localhost:5000/employee/removeSeat", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        theater_id: theater_id,
        number_of_seats: seat,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "success") {
          alert("Remove seat successfully!");
        } else {
          alert("Remove seat failed!");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Button onClick={handleOpen}>Edit</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add more seats to Theater {theater_id.toUpperCase()}
          </Typography>
          <input
            type="number"
            placeholder="Enter number of seats to add"
            className="outline outline-1"
            onChange={(e) => setSeat(e.target.value)}
          />
          <button
            onClick={HandleAddSeat}
            className="bg-indigo-500 text-white rounded px-4 py-2 mt-4 hover:bg-indigo-900 transform active:scale-75 transition-transform"
          >
            Add
          </button>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Remove seats from Theater {theater_id.toUpperCase()}
          </Typography>
          <input
            type="number"
            placeholder="Enter number of seats to remove"
            className="outline outline-1"
            onChange={(e) => setSeat(e.target.value)}
          />
          <button
            onClick={HandleRemoveSeat}
            className="bg-indigo-500 text-white rounded px-4 py-2 mt-4 hover:bg-indigo-900 transform active:scale-75 transition-transform"
          >
            Remove
          </button>
        </Box>
      </Modal>
    </div>
  );
}
