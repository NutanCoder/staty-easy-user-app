-- Add owner_id column to properties table
ALTER TABLE public.properties
ADD COLUMN owner_id UUID REFERENCES auth.users(id);

-- Create policy to allow users to read all properties
CREATE POLICY "Anyone can read properties"
    ON public.properties
    FOR SELECT
    USING (true);

-- Create policy to allow users to update their own properties
CREATE POLICY "Users can update their own properties"
    ON public.properties
    FOR UPDATE
    USING (auth.uid() = owner_id);

-- Create policy to allow users to delete their own properties
CREATE POLICY "Users can delete their own properties"
    ON public.properties
    FOR DELETE
    USING (auth.uid() = owner_id); 