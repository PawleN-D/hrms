"use client"
import Modal from '@/app/components/Modal/Modal';
import React, { useState } from 'react';

interface Message {
  id: number;
  subject: string;
  content: string;
}

interface LeaveRequest {
  id: number;
  title: string;
  reason: string;
}

const InboxPageComponent: React.FC = (props) => {
  const [inboxMessages, setInboxMessages] = useState<Message[]>(props.initialInboxMessages);
  const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>(props.initialLeaveRequests);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [selectedRequest, setSelectedRequest] = useState<LeaveRequest | null>(null);

  // Sample data (you can replace this with your own data)

  // Function to open a modal when a message or request is clicked
  const openMessageModal = (message: Message) => {
    setSelectedMessage(message);
  };

  const openRequestModal = (request: LeaveRequest) => {
    setSelectedRequest(request);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedMessage(null);
    setSelectedRequest(null);
  };

  return (
    <div className="flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
      <div className="w-1/2 p-4 backdrop-brightness-50">
        <h2 className="text-2xl font-bold mb-4">New Messages (Inbox)</h2>
        <ul>
          {inboxMessages.length > 0 ? (
            inboxMessages.map((message) => (
              <li
                key={message.id}
                onClick={() => openMessageModal(message)}
                className="cursor-pointer text-blue-500 hover:underline"
              >
                {message.subject}
              </li>
            ))
          ) : (
            <p>No new messages.</p>
          )}
        </ul>
      </div>
      <div className="w-1/2 p-4 backdrop-brightness-50">
        <h2 className="text-2xl font-bold mb-4">Leave Requests</h2>
        <ul>
          {leaveRequests.length > 0 ? (
            leaveRequests.map((request) => (
              <li
                key={request.id}
                onClick={() => openRequestModal(request)}
                className="cursor-pointer text-green-500 hover:underline"
              >
                {request.title}
              </li>
            ))
          ) : (
            <p>No leave requests.</p>
          )}
        </ul>
      </div>
      {selectedMessage && (
        <Modal
          title={selectedMessage.subject}
          content={selectedMessage.content}
          onClose={closeModal}
        />
      )}
      {selectedRequest && (
        <Modal
          title={selectedRequest.title}
          content={selectedRequest.reason}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default InboxPageComponent;
