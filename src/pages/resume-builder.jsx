"use client";

import React, { useState } from "react";
import { Document, Page, Text, View, PDFDownloadLink } from "@react-pdf/renderer";
import styles from "@/styles/resume.module.scss";

const ResumePDF = ({ name, email, phone, summary, experience }) => (
  <Document>
    <Page size="A4" style={{ padding: 20 }}>
      <View>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>{name}</Text>
        <Text>{email} | {phone}</Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Summary</Text>
        <Text>{summary}</Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Experience</Text>
        <Text>{experience}</Text>
      </View>
    </Page>
  </Document>
);

export default function ResumeBuilder() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [summary, setSummary] = useState("");
  const [experience, setExperience] = useState("");

  return (
    <div className={styles["resume-container"]}>
      <h1>Resume Builder</h1>
      <input className={styles["input-field"]} placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input className={styles["input-field"]} placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className={styles["input-field"]} placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <input className={styles["input-field"]} placeholder="Summary" value={summary} onChange={(e) => setSummary(e.target.value)} />
      <input className={styles["input-field"]} placeholder="Experience" value={experience} onChange={(e) => setExperience(e.target.value)} />
      
      <PDFDownloadLink
        document={<ResumePDF name={name} email={email} phone={phone} summary={summary} experience={experience} />}
        fileName="resume.pdf"
      >
        {({ loading }) => (
          <button className={styles["download-button"]}>{loading ? "Generating..." : "Download Resume"}</button>
        )}
      </PDFDownloadLink>
    </div>
  );
}
