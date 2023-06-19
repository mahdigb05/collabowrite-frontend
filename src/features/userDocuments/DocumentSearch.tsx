import { Button, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose(): void;
}

const DocumentSearch = () => {
  const [openModal, setOpenModal] = useState<string | undefined>();
  return (
    <>
      <Button onClick={() => setOpenModal("default")}>Toggle modal</Button>
      <Modal
        dismissible
        show={openModal === "default"}
        onClose={() => setOpenModal(undefined)}
      >
        <Modal.Header
          theme={{
            base: "w-full p-3",
            close: {
              base: "hidden",
            },
          }}
        >
          <TextInput
            className="w-full"
            id="email1"
            placeholder="document title, owner name, shared with..."
            type="text"
          />
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Search documents by title, owner name, or shared people names
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DocumentSearch;
