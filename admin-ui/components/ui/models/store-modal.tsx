import { useStoreModal } from "@/hooks/use-store-modal";
import React from "react";
import { Modal } from "../modal";

export const StoreModal = () => {
  const storeModal = useStoreModal();
  return (
    <Modal
      title="Create Store"
      description="add new store to manage products and categories"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      This is the Form
    </Modal>
  );
};
