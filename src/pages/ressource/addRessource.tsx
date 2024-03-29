import React from "react";
import Link from "next/link";
import Nav from "@/components/client/nav";
import Ressource from "@/components/client/ressource";
import Footer from "@/components/client/footer";

export default function addRessource(){
    return (

        <div className="d-flex flex-column h-100">
            <Nav/>
            <main className="flex-shrink-0">

                <div className={"d-flex flex-md-column text-center"}>
                    <h1 className="pt-4 pb-4 pl-4">Ajouter une ressource</h1>

                    <div className="align-content-center border-3 rounded-3 pr-16 pl-16 pb-8 pt-8 bg-cyan-800">
                        <textarea className="mb-3 bg-white" placeholder={"Titre de la ressource"}></textarea>
                        <textarea className="mb-3 bg-white" placeholder={"Categorie"}></textarea>
                        <textarea className="mb-3 bg-white" placeholder={"Description"}></textarea>

                        <div className={"text-center"}>
                            <button className={"bg-success text-white border-2 rounded mt-2 mb-2 px-16 pt-1 pb-1 border-success"}>
                                <Link href={'/'}>Ajouter</Link>
                            </button>
                        </div>
                    </div>
                </div>

            </main>
            <Footer/>
        </div>
    );
}