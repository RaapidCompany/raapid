interface EmailTemplateProps {
  senderName: string;
  message: string;
  senderEmail: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  senderName,
  message,
  senderEmail,
}) => (
  <div>
    <h1>New Message from {senderName}</h1>
    <p style={{ fontSize: '16px', lineHeight: '24px', margin: '24px 0' }}>
      {message}
    </p>
    <div style={{ marginTop: '32px', borderTop: '1px solid #ddd', paddingTop: '16px' }}>
      <p style={{ fontSize: '14px', color: '#666' }}>
        Contact: {senderEmail}
      </p>
      <p style={{ fontSize: '12px', color: '#999', marginTop: '8px' }}>
        Sent via Raapid Mail Service
      </p>
    </div>
  </div>
);
