import { Urbanist } from "next/font/google";
import * as React from "react";

import "./globals.css";
import ToastProvider from "@/providers/toast-provider";
import ModalProvider from "@/providers/modal-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";

const font = Urbanist({ subsets: ["latin"] });

export const metadata = {
	title: "Store",
	description: "Store - The place for all your purchases."
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={font.className}>
				<ToastProvider />
				<ModalProvider />
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
