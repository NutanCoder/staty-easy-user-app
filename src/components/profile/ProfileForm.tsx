"use client";

import { supabaseClient } from "@/lib/supabaseClient";
import { useState } from "react";
import Button from "../button";
import Input from "../input";

interface ProfileFormProps {
  initialData?: {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
  };
}

export default function ProfileForm({ initialData }: ProfileFormProps) {
  const [formData, setFormData] = useState({
    first_name: initialData?.first_name || "",
    last_name: initialData?.last_name || "",
    email: initialData?.email || "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error } = await supabaseClient.from('profiles').update({
      first_name: formData.first_name,
      last_name: formData.last_name,
    }).eq('id', initialData?.id).select().single();
    if (error) {
      console.error(error);
    }
    if (data) {
      console.log(data);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Input
          label="First Name"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          required
          placeholder="Enter your full name"
        />
      </div>
      <div>
        <Input
          label="Last Name"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          required
          placeholder="Enter your last name"
        />
      </div>

      <div>
        <Input
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Enter your email"
          disabled
        />
      </div>
      <div className="flex justify-end">
        <Button type="submit" disabled={false}>
          Save Changes
        </Button>
      </div>
    </form>
  );
}
